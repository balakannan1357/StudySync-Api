import { Service } from 'typedi';

@Service()
export class SchedulerService {
  constructor() {}

  public scheduleTasks(availability, tasks) {
    const schedule = {};
    let taskIndex = 0;

    for (const day in availability) {
      schedule[day] = [];
      let slots = availability[day];

      for (const slot of slots) {
        let startTime = this.convertToMinutes(slot.startTime);
        let endTime = this.convertToMinutes(slot.endTime);

        while (startTime < endTime && taskIndex < tasks.length) {
          const task = tasks[taskIndex];
          const taskDuration = task.duration;

          if (startTime + taskDuration <= endTime) {
            schedule[day].push({
              taskId: task.taskId,
              startTime: this.convertToTime(startTime),
              endTime: this.convertToTime(startTime + taskDuration),
            });
            startTime += taskDuration;
            taskIndex++;
          } else {
            const partialDuration = endTime - startTime;
            schedule[day].push({
              taskId: task.taskId,
              startTime: this.convertToTime(startTime),
              endTime: this.convertToTime(endTime),
            });
            task.duration -= partialDuration;
            break;
          }
        }
      }
    }

    return schedule;
  }

  private convertToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  private convertToTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  }
}
