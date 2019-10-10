---
title: How to create custom annotation in Java
subTitle: Java Practices
path: "/custom-annotation/"
category: "java"
cover: photo-java-custom-annotation-cover.jpg
---

![](./photo-java-annotation.jpg)

### What Are Annotations?
Annotations are decorators that are applied to Java constructs,
 such as classes, methods, or fields, that associate metadata with the construct. 
 These decorators are benign and do not execute any code in-and-of-themselves, 
 but can be used by runtime frameworks or the compiler to perform certain actions.

### How Are Annotations Created ?

#### Defining Class Level Annotation

```java
@Retention(RetentionPolicy.RUNTIME) 
@Target(ElementType.TYPE) 
public @interface myField { 
}
```

As we can see, our first annotation **has runtime visibility, and we can apply it to types (classes).**

#### Defining Method Level Annotation

```java
@Retention(RetentionPolicy.RUNTIME) 
@Target(ElementType.METHOD) 
public @interface myMethod { 
} 
```
#### Defining Field Level Annotation

```java
@Retention(RetentionPolicy.RUNTIME) 
@Target(ElementType.FIELD) 
public @interface myType { 
public String brokers() default ""; 
} 
```

### Applying Annotations

```java
@myField
public class Network {
 
    @myType(brokers = "localhost")
    private String ip;
 
    @myType
    private String name;
 
    @myType
    private String age;
 
 
    @myMethod
    private void initNames() {
        this.ip = this.ip.substring(0, 1).toUpperCase() 
          + this.ip.substring(1);
        this.name = this.name.substring(0, 1).toUpperCase() 
          + this.name.substring(1);
    }
 
    // Standard getters and setters
}
```