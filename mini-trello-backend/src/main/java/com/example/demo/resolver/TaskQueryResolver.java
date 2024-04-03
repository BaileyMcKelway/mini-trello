package com.example.demo.resolver;

import com.example.demo.model.Task;
import org.springframework.stereotype.Component;
import com.example.demo.repository.TaskRepository;
import graphql.kickstart.tools.GraphQLQueryResolver;
import java.util.List;

@Component
public class TaskQueryResolver implements GraphQLQueryResolver {
    private final TaskRepository taskRepository;

    public TaskQueryResolver(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> tasks() {
        return taskRepository.findAll();
    }
}
