class HTTPAbort {
  isCanceled = false;

  public onabort = () => {};

  public readonly cancel = () => {
    this.isCanceled = true;
    this.onabort();
  };
}

export default HTTPAbort;
