package com.neighbopril.rest.webservices.restfulwebservices.todo;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Todo {

  private long id;
  private String username;
  private String description;
  private Date targetDate;
  private boolean isDone;

}
