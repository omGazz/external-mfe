declare module 'shell/FooService' {
    export class FooService {
      setData(data: string): void;
    }
  }
  /**Workaround to use the remote FooService. It doesn't work atm */