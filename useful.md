### sl4j not find symbol err
Preferences -> Compiler -> Annotation Processors -> CHECK enable~

### config log level 
> <?xml version="1.0" encoding="UTF-8"?>
>  <!DOCTYPE configuration>
>  <configuration>
>      <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
>          <layout class="ch.qos.logback.classic.PatternLayout">
>              <Pattern>%d{HH:mm:ss.SSS} [%-5level] [%thread] [%logger{36}] - %m%n</Pattern>
>          </layout>
>      </appender>
>  
>      <logger name="com.example" level="DEBUG" />
>  
>      <root level="INFO">
>          <appender-ref ref="STDOUT" />
>      </root>
>  </configuration>

### config template file extension to html
build.gradle
> compile('pl.allegro.tech.boot:handlebars-spring-boot-starter:0.2.15')

application.properties
> handlebars.suffix=.html
