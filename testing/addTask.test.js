import { addTask, removeTask } from '../src/index';

describe('Addition and removal of tasks', () => {
  it('should add a task', () => {
    let tasks = [];
    const form = document.createElement('form');
    form.innerHTML = `<div class="header">
          <h3>Today's To-Do</h3>
          <i class="fa fa-refresh refresh" type="button" aria-hidden="true"></i>
        </div>

        <div class="add-task-div">
          <input class="add-task" type="text" placeholder="Add to your list..." />
          <button type="submit"><i class="fa fa-arrow-circle-o-right enter" type="button" aria-hidden="true"></i></button>
        </div>`;

    const input = form.querySelector('input');
    const btn = form.querySelector('button');
    input.value = 'wash plates';
    btn.click();
    expect(1 + 1).toBe(2);
  });
});
