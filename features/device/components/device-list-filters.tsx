"use client";
import {IconLoader2, IconSearch} from "@tabler/icons-react";
import {useQueryState} from "nuqs";
import {ChangeEvent, useEffect, useRef, useState, useTransition} from "react";
import {InputGroup, InputGroupAddon, InputGroupInput} from "#/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "#/components/ui/select";
import {searchParams} from "#/lib/search-params";
import {Device} from "../types";

export function DeviceListFilters() {
  const debouncedTimeoutID = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [isPending, startTransition] = useTransition();
  const [q, setQ] = useQueryState("q", searchParams.q.withOptions({startTransition, shallow: false}));
  const [query, setQuery] = useState(q);

  useEffect(() => {
    return () => clearTimeout(debouncedTimeoutID.current);
  }, []);

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setQuery(e.target.value);
    if (debouncedTimeoutID.current) {
      clearTimeout(debouncedTimeoutID.current);
    }
    debouncedTimeoutID.current = setTimeout(() => {
      setQ(e.target.value);
    }, 300);
  };

  return (
    <div className="flex gap-2.5" data-pending={isPending ? "" : undefined}>
      <InputGroup>
        <InputGroupInput placeholder="جست و جو..." value={query} onChange={handleQueryChange} />
        <InputGroupAddon>{isPending ? <IconLoader2 className="animate-spin" /> : <IconSearch />}</InputGroupAddon>
      </InputGroup>
      <StatusSelect />
    </div>
  );
}

type Item = {
  label: string;
  value: Device["status"] | "";
};

const items: Item[] = [
  {label: "همه", value: ""},
  {label: "آنلاین", value: "online"},
  {label: "آفلاین", value: "offline"},
  {label: "هشدار", value: "warning"}
];

function StatusSelect() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useQueryState(
    "status",
    searchParams.status.withOptions({shallow: false, startTransition: startTransition}).withDefault("")
  );

  const handleStatusChange = (newValue: string | null) => {
    setStatus(newValue);
  };

  return (
    <div data-pending={isPending ? "" : undefined}>
      <Select items={items} value={status} onValueChange={handleStatusChange}>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>وضعیت</SelectLabel>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
