import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
};

export const Demo = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const firstName = watch("firstName");
  const lasyName=  watch("lastName")

  return <form onSubmit={handleSubmit(onSubmit)}>
    <h1>{firstName} {lasyName}</h1>
    <div>
        <label htmlFor="">FirstName</label>
        <br />
        <input type="text" {...register('firstName', { required: "First name is required" })} />
        <br />
        {<span>{errors?.firstName?.message}</span>}
    </div>
    <div>
        <label htmlFor="">Last name</label>
        <br />
        <input type="text" {...register('lastName', { required: "Last name is required" })} />
        <br />
        {<span>{errors?.lastName?.message}</span>}
    </div>
    <button type="submit" >Submit</button>
  </form>;
};
