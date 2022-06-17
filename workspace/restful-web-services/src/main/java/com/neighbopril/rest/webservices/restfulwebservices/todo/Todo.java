package com.neighbopril.rest.webservices.restfulwebservices.todo;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
@Entity
public class Todo {

  @Id
  @GeneratedValue
  private Long id;

  private String username;
  private String description;
  private Date targetDate;
  private boolean isDone;

}
