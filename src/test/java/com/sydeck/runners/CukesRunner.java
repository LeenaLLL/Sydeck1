package com.sydeck.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin={"json:target/cucumber.json"},

        features="src/test/resources/features",
        glue="com/sydeck/stepDefinitions",
        dryRun=false,
        tags="@SYD-257"
)

public class CukesRunner {
}


