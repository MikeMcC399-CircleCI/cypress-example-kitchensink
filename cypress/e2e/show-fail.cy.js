describe('deliberate failure', () => {
  it("show test failing", function () {
    throw new Error("deliberate hard failure");
  });
})