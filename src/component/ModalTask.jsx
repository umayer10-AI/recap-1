"use client";
import { createTask } from "@/lib/action";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, ListBox, Modal, Surface, Select, TextField} from "@heroui/react";
import React from 'react';

const ModalTask = () => {
    return (
        <div>
            <Modal>
      <Button>Task Form</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>My Task</Modal.Heading>

            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={createTask} className="flex flex-col gap-4">
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
                  
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot={'close'} type="submit">Submit</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
        </div>
    );
};

export default ModalTask;