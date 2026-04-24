import { lastTask } from "@/lib/action";
import { Input, Label, TextField, Select, ListBox, Button } from "@heroui/react";
import React from "react";

const page = () => {
  return (
    <div className="w-[30%] mx-auto border p-5 border-white rounded-2xl mt-10">
      <form action={lastTask} className="flex flex-col gap-4">
        <TextField className="w-full" name="author" type="text">
          <Label>Author</Label>
          <Input placeholder="Enter your author" />
        </TextField>
        <TextField className="w-full" name="category" type="text">
          <Label>Category</Label>
          <Input placeholder="Enter your category" />
        </TextField>

        <Select className="w-[256px]" placeholder="Select one">
          <Label>Priority</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="pending" textValue="Pending">
                Pending
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="process" textValue="Process">
                Process
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="completed" textValue="Completed">
                Completed
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>


          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button slot={"close"} type="submit">
            Submit
          </Button>

      </form>
    </div>
  );
};

export default page;
