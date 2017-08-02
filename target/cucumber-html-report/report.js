$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featureFiles/search.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Search",
  "description": "",
  "id": "testing-search",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Check search icon",
  "description": "",
  "id": "testing-search;check-search-icon",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Runme"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see search icon",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 290527074107,
  "error_message": "org.openqa.selenium.WebDriverException: connection refused\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Dipanjans-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:1450:d784:ebbd:b14f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: driver.version: FirefoxDriver\nremote stacktrace: stack backtrace:\n   0:        0x10b59b54e - backtrace::backtrace::trace::hc694823f3e7463c0\n   1:        0x10b59b6ec - backtrace::capture::Backtrace::new::h23089c033eded8f0\n   2:        0x10b52db32 - webdriver::error::WebDriverError::new::h403591f0d09febaa\n   3:        0x10b537585 - geckodriver::marionette::MarionetteHandler::create_connection::hfc7af8bf299cf57b\n   4:        0x10b50e707 - _$LT$webdriver..server..Dispatcher$LT$T$C$$u20$U$GT$$GT$::run::h03bbbfe904a992bd\n   5:        0x10b4f4c97 - std::panicking::try::do_call::he6fd7abc59b6b346\n   6:        0x10b6b84ba - __rust_maybe_catch_panic\n   7:        0x10b50500c - _$LT$F$u20$as$u20$alloc..boxed..FnBox$LT$A$GT$$GT$::call_box::h8e002f7c448fbabb\n   8:        0x10b6b4684 - std::sys::imp::thread::Thread::new::thread_start::hba7593f2e1f1beb1\n   9:     0x7fffbd87693a - _pthread_body\n  10:     0x7fffbd876886 - _pthread_start\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$22(ProtocolHandshake.java:365)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:368)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:159)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:250)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:236)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:137)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:108)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:104)\n\tat testSearch.stepDefinitionHelper.setUp(stepDefinitionHelper.java:24)\n\tat testSearch.stepDefinitions.setUpWebDriver(stepDefinitions.java:19)\n\tat testSearch.stepDefinitions.i_am_on_the_homepage(stepDefinitions.java:53)\n\tat ✽.Given I am on the homepage(featureFiles/search.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.i_should_see_search_icon()"
});
formatter.result({
  "status": "skipped"
});
});