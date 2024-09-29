import {
  Box,
  Button,
  Card,
  FormControl,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

export enum StatusEnum {
  WAITING_PAYMENT = "WAITING_PAYMENT",
  SENT = "SENT",
  DELIVERED = "DELIVERED",
}

interface Inputs {
  product_name: string;
  product_count: number;
  client_name: string;
  description: string;
  price: number;
  status: StatusEnum;
}

interface IOrderForm {
  handleClose: () => void;
  inputs?: Inputs;
}

export const OrderForm = ({ handleClose, inputs }: IOrderForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { ...inputs } });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    handleClose();
  };
  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        Create Order
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 2,
        }}
      >
        <FormControl>
          <TextField
            {...register("product_name", {
              required: "Product name is required",
            })}
            error={!!errors.product_name}
            helperText={errors.product_name?.message}
            type="text"
            required
            fullWidth
            variant="outlined"
            label="Product name"
            color={errors.product_name ? "error" : "primary"}
          />
        </FormControl>
        <FormControl>
          <TextField
            {...register("product_count", {
              required: "Product count is required",
            })}
            error={!!errors.product_count}
            helperText={errors.product_count?.message}
            type="number"
            required
            fullWidth
            variant="outlined"
            label="Product count"
            color={errors.product_count ? "error" : "primary"}
          />
        </FormControl>
        <FormControl>
          <TextField
            {...register("client_name", {
              required: "Client name is required",
            })}
            error={!!errors.client_name}
            helperText={errors.client_name?.message}
            type="text"
            required
            fullWidth
            variant="outlined"
            label="Client name"
            color={errors.client_name ? "error" : "primary"}
          />
        </FormControl>
        <FormControl>
          <TextField
            {...register("price", {
              required: "Price field is required",
            })}
            error={!!errors.price}
            helperText={errors.price?.message}
            type="number"
            required
            fullWidth
            variant="outlined"
            label="Price"
            color={errors.price ? "error" : "primary"}
          />
        </FormControl>
        <FormControl error={!!errors.description}>
          <TextField
            {...register("description", {
              required: "Description field is required",
            })}
            error={!!errors.description}
            helperText={errors.description?.message}
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
          />
        </FormControl>
        <FormControl error={!!errors.status}>
          <InputLabel id="demo-simple-select-error-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-error-label"
            id=""
            {...register("status", { required: "Select the status" })}
            label="Status"
            fullWidth
            defaultValue={inputs?.status}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={StatusEnum.WAITING_PAYMENT}>
              Waiting payment
            </MenuItem>
            <MenuItem value={StatusEnum.SENT}>Sent</MenuItem>
            <MenuItem value={StatusEnum.DELIVERED}>Delivered</MenuItem>
          </Select>
          {errors.status && (
            <FormHelperText>{errors.status.message}</FormHelperText>
          )}
        </FormControl>
        <Button type="submit" fullWidth variant="contained">
          Save
        </Button>
      </Box>
    </>
  );
};
