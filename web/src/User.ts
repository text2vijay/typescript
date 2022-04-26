interface UserProps {
  name?: string;
  age?: number;
}

//type alias for a empty function return nothing
type Callback = () => void;

export class User {
  //events going to be an object with keys would be array of events and values would array of callbacks.
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    //When user first created events would be empty object.
    //we need to store a events
    //this.events[eventName] will be Callback[] or undefined , if undefined handlers would be empyt[]
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  }
}
