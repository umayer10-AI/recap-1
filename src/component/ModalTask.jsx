"use client";
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
                <form className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
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
              <Button slot="close">Submit</Button>
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