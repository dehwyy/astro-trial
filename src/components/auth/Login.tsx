import {useForm} from "react-hook-form";
import {Button, Divider, TextField} from "@mui/material";
import {useCallback, useEffect} from "react";
enum FieldValues {
    "username" = "username",
    "password" = "password",
}
const Login = () => {
    const { register, handleSubmit,reset } = useForm<typeof FieldValues>();
    const onSubmit = useCallback((data: typeof FieldValues) => {
        console.log(data)
        reset()
    }, [])
    useEffect(() => {
        return () => reset()
    }, [])
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 font-custom-generis">
            <TextField color="secondary" label="Title" variant="standard" {...register(FieldValues.username, { required: true })} />
            <TextField color="secondary" label="Password" variant="standard" {...register(FieldValues.password, { required: true })} />
            <Button type="submit"></Button>
        </form>
    );
};

export default Login;