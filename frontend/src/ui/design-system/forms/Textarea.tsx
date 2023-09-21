import clsx from "clsx";
import Typography from "../typography/Typography";

interface Props {
  isLoading: boolean;
  placeholder: string;
  rows?: number;
  register: any;
  errors: any;
  errorMsg?: string;
  id: string;
  required?: boolean;
  isAutocompleted?: boolean;
  label?: string;
}

const Textarea = ({
  isLoading,
  placeholder,
  rows = 5,
  register,
  errors,
  errorMsg = "Tu dois renseigner ce champ",
  id,
  required,
  isAutocompleted,
  label,
}: Props) => {
  return (
    <div className="space-y-2">
      {label && (
        <Typography
          variant="caption4"
          component="div"
          theme={errors[id] ? "danger" : "gray-600"}
        >
          {label}
        </Typography>
      )}
      <textarea
        placeholder={placeholder}
        rows={rows}
        className={clsx(
          isLoading
            ? "bg-gray-300 focus:ring-gray-300 cursor-not-allowed"
            : "bg-white",
          errors[id]
            ? "placeholder-alert-danger text-alert-danger"
            : "placeholder-gray-600",
          "w-full p-4 font-light border rounded focus:outline-none focus:ring-1 focus:ring-primary border-gray-400"
        )}
        disabled={isLoading}
        {...register(id, {
          required: {
            value: required,
            message: errorMsg,
          },
        })}
        autoComplete={isAutocompleted ? "on" : "off"}
      ></textarea>
      {errors[id] && (
        <Typography variant="caption4" component="div" theme="danger">
          {errors[id]?.message}
        </Typography>
      )}
    </div>
  );
};

export default Textarea;
