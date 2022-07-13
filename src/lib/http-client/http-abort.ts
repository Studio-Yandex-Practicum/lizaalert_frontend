class HTTPAbort {
  private isCanceled = false;

  public getCanceled() {
    return this.isCanceled;
  }

  public onabort = () => {};

  /** Отменяет запрос */
  public readonly cancel = () => {
    this.isCanceled = true;
    this.onabort();
  };
}

export default HTTPAbort;
