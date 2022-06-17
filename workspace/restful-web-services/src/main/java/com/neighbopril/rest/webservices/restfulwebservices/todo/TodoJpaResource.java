package com.neighbopril.rest.webservices.restfulwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin
public class TodoJpaResource {

  @Autowired
  private TodoHardcodedService todoService;

  @Autowired
  private TodoJpaRepository todoJpaRepository;

  @GetMapping("/jpa/users/{username}/todos")
  public List<Todo> getAllTodos(@PathVariable String username) throws InterruptedException{
    return todoJpaRepository.findByUsername(username);

  }
  @GetMapping("/jpa/users/{username}/todos/{id}")
  public Todo getTodo(@PathVariable String username, @PathVariable long id) throws InterruptedException{
    return todoJpaRepository.findById(id).get();

  }

  @PostMapping("/jpa/users/{username}/todos")
  public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo) {
    todo.setUsername(username);
    Todo createdTodo = todoJpaRepository.save(todo);

    // Location
    // Get current resource url
    // {id}
    URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
        .buildAndExpand(createdTodo.getId()).toUri();

    return ResponseEntity.created(uri).build();
  }

  @PutMapping("/jpa/users/{username}/todos/{id}")
  public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {
    todo.setUsername(username);
    Todo todoUpdated = todoJpaRepository.save(todo);

    return new ResponseEntity<Todo>(todoUpdated, HttpStatus.OK);
  }

  @DeleteMapping("/jpa/users/{username}/todos/{id}")
  public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
    todoJpaRepository.deleteById(id);
    return ResponseEntity.noContent().build();
  }
}
