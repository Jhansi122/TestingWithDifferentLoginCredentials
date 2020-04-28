package TestRunnerCucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= "src/main/resources/Features/ApplicationFeatures.feature", glue= {"stepDefinitation"},
plugin= {"pretty", "html:target/Cucumber-pretty.txt"} ) 

public class TestRunner 
{


}
