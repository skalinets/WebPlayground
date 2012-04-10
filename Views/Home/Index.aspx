<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Home Page
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <p>
        Click calculate button to simulate long calculations.
    </p>
    <div>
        <a id="ourButton" class="btn btn-danger">Calculate All</a>
        <div class="progress progress-danger progress-striped active">
          <div id="progress" style="width: 20%" class="bar" ></div>
        </div>
    </div>
    <div id="result"></div>
   
</asp:Content>
