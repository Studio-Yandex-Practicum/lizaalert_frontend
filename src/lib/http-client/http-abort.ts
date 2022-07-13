class HTTPAbort {
  isCanceled = false;

  public onabort = () => {};

  /** Отменяет запрос */
  public readonly cancel = () => {
    this.isCanceled = true;
    this.onabort();
  };
}

export default HTTPAbort;
