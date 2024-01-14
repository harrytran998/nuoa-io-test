import { email, minLength, required, useForm, valiForm } from "@modular-forms/react";
import { type FC, type FormEventHandler, useState } from "react";
import { UserCareer, type UserModel, userJobs, userSchema } from "./UserForm/userform.schema";
import { Button } from "./shared/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./shared/dialog";
import { Input } from "./shared/input";
import { Label } from "./shared/label";
import { NumberInput } from "./shared/number-input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./shared/select";

type Props = {
  isOpen: boolean;
  title: string;
  onAddSuccess: () => void;
};

export const UserForm: FC<Props> = ({ isOpen, title, onAddSuccess }) => {
  const [userJob, setUserJob] = useState<string[]>([]);
  const [createUserForm, { Form, Field }] = useForm<UserModel>({
    validate: valiForm(userSchema),
    validateOn: "change",
  });
  const handleChangeCareer = (career: UserCareer) => {
    if (career !== UserCareer.Retired) {
      setUserJob(userJobs[career]);
    } else {
      setUserJob([]);
    }
  };

  const handleSubmitForm = (form) => {
    console.log("handleSubmitForm  👻  form:", form);
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new user</DialogTitle>
        </DialogHeader>
        <Form onSubmit={handleSubmitForm}>
          <div className="grid gap-4 py-4">
            <Field name="name">
              {(field, props) => (
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input {...props} className="col-span-3" />
                  {field.error && <div className="text-red-500">{field.error}</div>}
                </div>
              )}
            </Field>
            <Field name="age" type="number">
              {(field, props) => (
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="age" className="text-right">
                    Age
                  </Label>
                  <NumberInput {...props} className="col-span-3" />
                  {field.error && <div className="text-red-500">{field.error}</div>}
                </div>
              )}
            </Field>
            <Field name="career">
              {(field, props) => (
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="career" className="text-right">
                    Career
                  </Label>
                  <Select name="career" onValueChange={handleChangeCareer}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a career" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value={UserCareer.Student}>
                          {UserCareer.Student.toString()}
                        </SelectItem>
                        <SelectItem value={UserCareer.Worker}>
                          {UserCareer.Worker.toString()}
                        </SelectItem>
                        <SelectItem value={UserCareer.Retired}>
                          {UserCareer.Retired.toString()}
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {field.error && <div className="text-red-500">{field.error}</div>}
                </div>
              )}
            </Field>
          </div>
          {userJob.length > 0 && (
            <Field name="job">
              {(field, props) => (
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="job" className="text-right">
                    Job
                  </Label>
                  <Select {...props}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a job" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {userJob.map((job) => (
                          <SelectItem key={job} value={job}>
                            {job}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {field.error && <div className="text-red-500">{field.error}</div>}
                </div>
              )}
            </Field>
          )}
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
