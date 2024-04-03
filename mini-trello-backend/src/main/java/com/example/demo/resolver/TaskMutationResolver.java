package com.example.demo.resolver;

import org.springframework.stereotype.Component;
import com.example.demo.model.Task;
import com.example.demo.model.TaskStatus;
import com.example.demo.repository.TaskRepository;
import graphql.kickstart.tools.GraphQLMutationResolver;


@Component
public class TaskMutationResolver implements GraphQLMutationResolver {
    private final TaskRepository taskRepository;

    public TaskMutationResolver(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Task addTask(String title, String description, TaskStatus status) {
        Task task = new Task(title, description, status);
        return taskRepository.save(task);
    }
}
