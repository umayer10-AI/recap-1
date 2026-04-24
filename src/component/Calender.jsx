"use client";
import {Button, ButtonGroup, Calendar, Description} from "@heroui/react";
import {
  getLocalTimeZone,
  parseDate,
  startOfMonth,
  startOfWeek,
  today,
} from "@internationalized/date";
import {useState} from "react";
import {useLocale} from "react-aria-components";
import React from "react";

const Calender = () => {

const [value, setValue] = useState(null);
  const [focusedDate, setFocusedDate] = useState(parseDate("2025-12-25"));
  const {locale} = useLocale();


  return (
    <div className="w-[25%] mx-auto">
      <div className="flex flex-col items-center gap-4">
        <ButtonGroup fullWidth size="sm" variant="tertiary">
          <Button
            onPress={() => {
              const todayDate = today(getLocalTimeZone());
              setValue(todayDate);
              setFocusedDate(todayDate);
            }}
          >
            Today
          </Button>
          <Button
            onPress={() => {
              const nextWeekStart = startOfWeek(
                today(getLocalTimeZone()),
                locale,
              );
              setValue(nextWeekStart);
              setFocusedDate(nextWeekStart);
            }}
          >
            Week
          </Button>
          <Button
            onPress={() => {
              const nextMonthStart = startOfMonth(today(getLocalTimeZone()));
              setValue(nextMonthStart);
              setFocusedDate(nextMonthStart);
            }}
          >
            Month
          </Button>
        </ButtonGroup>
        <Calendar
          aria-label="Event date"
          focusedValue={focusedDate}
          value={value}
          onChange={setValue}
          onFocusChange={setFocusedDate}
        >
          <Calendar.Header>
            <Calendar.Heading />
            <Calendar.NavButton slot="previous" />
            <Calendar.NavButton slot="next" />
          </Calendar.Header>
          <Calendar.Grid>
            <Calendar.GridHeader>
              {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
            </Calendar.GridHeader>
            <Calendar.GridBody>
              {(date) => <Calendar.Cell date={date} />}
            </Calendar.GridBody>
          </Calendar.Grid>
        </Calendar>
        <Description className="text-center">
          Selected date: {value ? value.toString() : "(none)"}
        </Description>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="secondary"
            onPress={() => {
              const todayDate = today(getLocalTimeZone());
              setValue(todayDate);
              setFocusedDate(todayDate);
            }}
          >
            Set Today
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onPress={() => {
              const christmasDate = parseDate("2025-12-25");
              setValue(christmasDate);
              setFocusedDate(christmasDate);
            }}
          >
            Set Christmas
          </Button>
          <Button size="sm" variant="tertiary" onPress={() => setValue(null)}>
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calender;
