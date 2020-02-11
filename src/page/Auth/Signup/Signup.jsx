import {useHistory, Link} from "react-router-dom"
import {useForm} from "react-hook-form"
import {createElement} from "react"
import {object, string} from "yup"

import useTitle from "lib/hook/useTitle"

import Form from "common/component/Form"
import Input from "common/component/Input"
import Button from "common/component/Button/Primary"

import signUp from "common/graphql/mutation/auth/signUp"

import {container, box, fields, field, actions, links, link} from "./signup.css"

const validationSchema = object().shape({
  login: string().required().matches(/^[a-z0-9-_.]+$/i),
  email: string().required().email(),
  password: string().required()
})

function Signup() {
  useTitle("Signup")

  const history = useHistory()

  const {register, handleSubmit, errors, formState: state} = useForm({
    nativeValidation: true,
    mode: "onChange",

    // FIXME: Will be deprecated in the next major version of react-hook-form
    // Probably need to be replaces with validationResolver or so.
    validationSchema
  })

  function submit(user) {
    signUp(user)
      .then(() => history.push("/"))
      .catch(console.error)
  }

  return (
    <div className={container}>
      <Form className={box} onSubmit={handleSubmit(submit)}>
        <div className={fields}>
          <div className={field}>
            <Input
              autoFocus
              id="login"
              type="text"
              name="login"
              placeholder="Login"
              invalid={"login" in errors}
              ref={register}
            />
          </div>

          <div className={field}>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              invalid={"email" in errors}
              ref={register}
            />
          </div>

          <div className={field}>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              invalid={"password" in errors}
              ref={register}
            />
          </div>

          <div className={actions}>
            <Button wide type="submit" disabled={!state.isValid}>
              Sign up
            </Button>
          </div>
        </div>
        <div className={links}>
          <Link className={link} to="/auth/login">
            I already have an account
          </Link>

          <Link className={link} to="/auth/recover">
            Forgot a password?
          </Link>
        </div>
      </Form>
    </div>
  )
}

export default Signup
