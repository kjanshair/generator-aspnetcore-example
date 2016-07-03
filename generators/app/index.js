var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay('Allo, I\'ll generate a basic ASP.NET Core application created by Janshair Khan.'));

    var prompts = [{
      type: 'input',
      name: 'myApp',
      message: 'What should be your app name?',
      default: 'App'
    }];

    return this.prompt(prompts).then(function (props) {
      this.appName = props.myApp;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    //MVC Controllers
    this.copy('Controllers/_AccountController.cs', 'Controllers/AccountController.cs');
    this.copy('Controllers/_HomeController.cs', 'Controllers/HomeController.cs');

    //MVC Models
    this.copy('Models/AccountViewModels/_LoginViewModel.cs', 'Models/AccountViewModels/LoginViewModel.cs');
    this.copy('Models/AccountViewModels/_RegisterViewModel.cs', 'Models/AccountViewModels/RegisterViewModel.cs');

    //launch settings
    this.copy('Properties/_launchSettings.json', 'Properties/launchSettings.json');

    //MVC Views
    this.copy('Views/Account/_Login.cshtml', 'Views/Account/Login.cshtml');
    this.copy('Views/Account/_Register.cshtml', 'Views/Account/Register.cshtml');

    this.copy('Views/Home/_Index.cshtml', 'Views/Home/Index.cshtml');
    this.copy('Views/Home/_About.cshtml', 'Views/Home/About.cshtml');
    this.copy('Views/Home/_Contact.cshtml', 'Views/Home/Contact.cshtml');

    this.copy('Views/Shared/__Layout.cshtml', 'Views/Shared/_Layout.cshtml');
    this.copy('Views/Shared/__LoginPartial.cshtml', 'Views/Shared/_LoginPartial.cshtml');
    this.copy('Views/Shared/__ValidationScriptsPartial.cshtml', 'Views/Shared/_ValidationScriptsPartial.cshtml');

    this.copy('Views/__ViewImports.cshtml', 'Views/_ViewImports.cshtml');
    this.copy('Views/__ViewStart.cshtml', 'Views/_ViewStart.cshtml');

    //Web Root files
    this.copy('wwwroot/js/_site.js', 'wwwroot/js/site.js');
    this.copy('wwwroot/_favicon.ico', 'wwwroot/favicon.ico');

    this.copy('wwwroot/css/_site.css', 'wwwroot/css/site.css');
    this.copy('wwwroot/css/_bootstrap.min.css', 'wwwroot/css/bootstrap.min.css');

    //Project root files
    this.copy('bowerrc', '.bowerrc');
    this.copy('gitattributes', '.gitattributes');
    this.copy('gitignore', '.gitignore');
    this.copy('_bower.json', 'bower.json');

    this.copy('_appsettings.json', 'appsettings.json');
    this.copy('_Program.cs', 'Program.cs');

    this.copy('_project.json', 'project.json');
    this.copy('_README.md', 'README.md');

    this.copy('_Startup.cs', 'Startup.cs');
    this.copy('_web.config', 'web.config');
  },

  install: function () {
    this.bowerInstall();
  }
});
