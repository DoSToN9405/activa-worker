export default {
  fetch() {
    return new Response("ACTIVA bootstrap");
  }
};

export class Chain {
  constructor(state) {
    this.state = state;
  }

  fetch() {
    return new Response("Chain alive");
  }
}
