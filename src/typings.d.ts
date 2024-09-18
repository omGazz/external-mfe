declare module 'shell/FooService' {
  export class FooService {
    // Add the methods and properties of FooService you expect to use
    public fooData: any;
    public fooDataSignal: any;
    setData(data: string): void;
  }
}

// export class FooService {

//   public fooData = signal<string>('Silicon Valley Characters');
//   public fooDataSignal = computed(() => this.fooData());

//   setData(data: string): void {
//     this.fooData.set(data);
//   }
// }