package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import com.example.demo.repository.TaskRepository;
import com.example.demo.resolver.TaskMutationResolver;
import com.example.demo.resolver.TaskQueryResolver;

import graphql.GraphQL;
import graphql.kickstart.tools.GraphQLMutationResolver;
import graphql.kickstart.tools.GraphQLQueryResolver;
import graphql.kickstart.tools.SchemaParser;
import graphql.schema.GraphQLSchema;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
	@Bean
    public GraphQLQueryResolver queryResolver(TaskRepository taskRepository) {
        return new TaskQueryResolver(taskRepository);
    }

	@Bean
  	public GraphQLMutationResolver mutationResolver(TaskRepository taskRepository) {
        return new TaskMutationResolver(taskRepository);
		}

  @Bean
    public GraphQLSchema schema(GraphQLQueryResolver queryResolver, GraphQLMutationResolver mutationResolver) {
        return SchemaParser.newParser()
                .file("schema.graphqls")
                .resolvers(queryResolver, mutationResolver)
                .build()
                .makeExecutableSchema();
    }

}
