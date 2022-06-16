package saucedemo.pages;

import lombok.Data;

@Data
public class PageManager {

    public LoginPage loginPage;

    public PageManager(LoginPage loginPage){
        this.loginPage=loginPage;
    }

}
