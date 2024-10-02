function subscribe(eventName: string, listener: (event: CustomEventInit) => void) {
  document.addEventListener(eventName, listener);
}

function unsubscribe(eventName: string, listener: (event: CustomEventInit) => void) {
  document.removeEventListener(eventName, listener);
}

function publish(eventName: string, data: object) {
  const event = new CustomEvent(eventName, { detail: data });
  document.dispatchEvent(event);
}

export { publish, subscribe, unsubscribe };
