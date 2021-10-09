
import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class CallWeatherByCityNameTest {
    @Test
    public void getLondonUKWeatherByCityTest(){
        //Make a request to get London,UK weather. Verify success and correct city
        given().
            queryParam("q","London").
            queryParam("appid","5200b7b13c07b38288bf1d8123d058e4").
        when().
            get("http://api.openweathermap.org/data/2.5/weather").
        then().
            assertThat().statusCode(200).and().
            assertThat().body("name", equalTo("London")).and().
            assertThat().body("sys.country", equalTo("GB"));
    }

}
