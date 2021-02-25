import { EventType } from "@testing-library/react";
import { useEffect, useRef } from "react";

type TUseEventListener = (
  target: any | HTMLElement,
  eventType: EventType,
  listener: EventListener,
  options?: EventListenerOptions
) => void;

const useEventListener: TUseEventListener = (
  target,
  eventType,
  listener,
  options
) => {
  const savedListener = useRef<any>();

  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  useEffect(() => {
    if (!target?.addEventListener) return;

    const eventListener = (event: any) => savedListener.current(event);

    target.addEventListener(eventType, eventListener, options);

    return () => {
      target.removeEventListener(eventType, eventListener, options);
    };
  }, [eventType, target, options]);
};

export default useEventListener;
