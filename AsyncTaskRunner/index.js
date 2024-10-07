class TaskRunner {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.runningTasks = 0;
    this.queue = [];
  }

  runTask(task) {
    this.runningTasks++;
    task(() => {
      this.runningTasks--;
      this.checkQue();
    });
  }

  checkQue() {
    while (this.runningTasks < this.concurrency && this.queue.length > 0) {
      const nextTask = this.queue.shift();
      this.runTask(nextTask);
    }
  }

  push(task) {
    this.queue.push(task);
    this.checkQue();
  }
}

const delay = (ms, callback) => {
  setTimeout(callback, ms);
};

const ex = new TaskRunner(3);

const t1 = (done) => {
  console.log("t1 started");
  delay(2000, () => {
    console.log("t1 finished");
    done();
  });
};
const t2 = (done) => {
  console.log("t2 started");
  delay(1000, () => {
    console.log("t2 finished");
    done();
  });
};
const t3 = (done) => {
  console.log("t3 started");
  delay(1500, () => {
    console.log("t3 finished");
    done();
  });
};
const t4 = (done) => {
  console.log("t4 started");
  delay(1000, () => {
    console.log("t4 finished");
    done();
  });
};
const t5 = (done) => {
  console.log("t5 started");
  delay(500, () => {
    console.log("t5 finished");
    done();
  });
};

ex.push(t1);
ex.push(t2);
ex.push(t3);
ex.push(t4);
ex.push(t5);
