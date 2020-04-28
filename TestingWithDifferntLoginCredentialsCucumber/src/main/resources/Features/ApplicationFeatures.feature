Feature: Test login functionality 
Scenario Outline: Test different login credentials 
	Given open Firefox browser 
	When user enters valid "<username>" and  valid "<Password>" 
	Then user should be able to login successfully 
	Examples: 
	
		|username| |Password|
		|username123@gmail.com| |1234|
		|username456@gmail.com| |123456|