import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import useSwr from "swr";
import { useRouter } from "next/router";
import { FETCHAPI } from "./api/FETCHAPI";

// const fetcher = (url = "/api/tickets") => fetch(url).then((res) => res.json());
function postHandler(user) {
  return fetch("http://127.0.0.1:3000/api/users/register", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  // console.log("USER : ", user);
  // const router = useRouter();
  // const { data, error } = useSwr(
  //   router.query ? `http://127.0.0.1:3000/api/users/register` : null,
  //   fetcher
  // );
  // console.log(data, error);
}
function loginHandler(user) {
  return fetch("http://127.0.0.1:3000/api/user/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  // console.log("USER : ", user);
  // const router = useRouter();
  // const { data, error } = useSwr(
  //   router.query ? `http://127.0.0.1:3000/api/users/register` : null,
  //   fetcher
  // );
  // console.log(data, error);
}

export async function getStaticProps() {
  const users = await FETCHAPI.get("tickets", {
    name: "Zahid",
  })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
  console.log(users);
  return {
    props: { users },
  };
  // const res = await fetch("http://localhost:3000/api/tickets");
  // const users = await res.json();

  // console.log(users);
}

function Ticket({ users }) {
  const [lang, setLang] = useState("1");
  const [platform, setPlatform] = useState("1");
  const [searchValue, setSearchValue] = useState("");

  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error;
  }

  function validateUserName(username) {
    let error;
    if (!username) {
      error = "Name is required";
    }
    return error;
  }

  function validateEmail(email) {
    let error;
    if (!email) {
      error = "Name is required";
    }
    return error;
  }

  function validatePassword(password) {
    let error;
    if (!password) {
      error = "Name is required";
    }
    return error;
  }

  async function searchUser(name, users) {
    const foundUser = await FETCHAPI.get("tickets", {
      name: name,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    if (foundUser) {
      users = foundUser;
      console.log("u: ", foundUser, "props : ", users);
      return {
        props: { users },
      };
    } else {
      console.log("Araniyor...");
    }
    // const res = await fetch("http://localhost:3000/api/tickets");
    // const users = await res.json();

    // console.log(users);
  }

  // useEffect(() => {
  //   searchUser();
  // },[searchValue])

  return (
    <Box m={5} bg={"teal.50"} p={10} borderWidth={1} borderRadius={15}>
      {/* <Input onChange={(value) => searchUser(value)} /> */}
      <Input onChange={(e) => searchUser(e.target.value)} />
      {/* <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            // let userInfos = JSON.stringify(values, null, 2);
            actions.setSubmitting(false);
          }, 1000);
          postHandler(values);
        }}
      >
        {(props) => (
          <Form>
            <Field name="name" validate={validateName} my={4}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.name && form.touched.name}
                  color="black"
                >
                  <FormLabel htmlFor="name" color="black">
                    Adınız ve soyadınız
                  </FormLabel>
                  <Input
                    {...field}
                    id="name"
                    placeholder="name"
                    color="black"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="username" validate={validateUserName} my={4}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.name && form.touched.name}
                  color="black"
                >
                  <FormLabel htmlFor="username" color="black">
                    Kullanıcı adı
                  </FormLabel>
                  <Input
                    {...field}
                    id="username"
                    placeholder="username"
                    color="black"
                  />
                  <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email" validate={validateEmail} my={4}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.name && form.touched.name}
                  color="black"
                >
                  <FormLabel htmlFor="email" color="black">
                    E-mail
                  </FormLabel>
                  <Input
                    {...field}
                    id="email"
                    placeholder="email"
                    color="black"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password" validate={validatePassword} my={4}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.name && form.touched.name}
                  color="black"
                >
                  <FormLabel htmlFor="password" color="black">
                    Şifre
                  </FormLabel>
                  <Input
                    {...field}
                    id="password"
                    placeholder="password"
                    color="black"
                  />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <RadioGroup onChange={setLang} value={lang} my={4}>
              <FormLabel>Dil seçiniz</FormLabel>
              <Stack direction="row">
                <Radio value="1">TR</Radio>
                <Radio value="2">EN</Radio>
              </Stack>
            </RadioGroup>
            <RadioGroup onChange={setPlatform} value={platform} my={4}>
              <FormLabel>Platform seçiniz</FormLabel>
              <Stack direction="row">
                <Radio value="1">Android</Radio>
                <Radio value="2">iOS</Radio>
              </Stack>
            </RadioGroup>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
              placement={"left-end"}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik> */}
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            // let userInfos = JSON.stringify(values, null, 2);
            actions.setSubmitting(false);
          }, 1000);
          // loginHandler(values);
          // getUsers();
        }}
      >
        {(props) => (
          <Form>
            {users &&
              users.map((user) => (
                <div key={user._id}>
                  <a href="">{user.name}</a>
                </div>
              ))}
            <Field name="email" validate={validateEmail} my={4}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.name && form.touched.name}
                  color="black"
                >
                  <FormLabel htmlFor="email" color="black">
                    E-mail
                  </FormLabel>
                  <Input
                    {...field}
                    id="email"
                    placeholder="email"
                    color="black"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password" validate={validatePassword} my={4}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.name && form.touched.name}
                  color="black"
                >
                  <FormLabel htmlFor="password" color="black">
                    Şifre
                  </FormLabel>
                  <Input
                    {...field}
                    id="password"
                    placeholder="password"
                    color="black"
                  />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Box align="right">
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
                placement={"left-end"}
              >
                Giriş Yap
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default Ticket;
