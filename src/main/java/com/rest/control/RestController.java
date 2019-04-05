package com.rest.control;

import com.rest.model.MyData;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;

@Controller
@RequestMapping(value = "/MyData")
public class RestController {

    private static ArrayList<MyData> datas = new ArrayList<MyData>();

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody ArrayList<MyData> getMyData() {
        System.out.println("getMyData");
        return datas;
        //return new MyData(time, "REST GET Call !!!");
    }

    @RequestMapping(method = RequestMethod.PUT)
    public @ResponseBody ArrayList<MyData> putMyData(
            @RequestBody MyData md) {
        System.out.println("putMyData");
        datas.add(md);
        return datas;
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public @ResponseBody ArrayList<MyData> deleteMyData(
            @RequestBody MyData md) {
        System.out.println("deleteMyData");
        for(int i = 0; i < datas.size(); i++){
            if(datas.get(i).getMessage().equals(md.getMessage())){
                datas.remove(i);
            }
        }
        return datas;
    }

}