# Material UI with .NET Core MVC

This project demonstrates how to integrate Material UI with a .NET Core MVC application.

## Project Setup

1. Created a new .NET Core MVC project using `dotnet new mvc`
2. Added Material UI CSS and JavaScript via CDN links in the _Layout.cshtml file
3. Implemented custom CSS classes that mimic Material UI styling
4. Added JavaScript enhancements for Material UI-like interactions

## Key Features

- Material UI-inspired buttons with ripple effects
- Material UI-inspired text fields
- Responsive design using Bootstrap
- Roboto font integration

## How to Run

1. Navigate to the project directory
2. Run `dotnet run`
3. Open your browser to https://localhost:5001 or http://localhost:5000

## Customization

You can customize the Material UI components by modifying:
- `wwwroot/css/site.css` - For CSS styles
- `wwwroot/js/site.js` - For JavaScript interactions
- `Views/` - For HTML structure

## Notes

This implementation uses CDN links for Material UI assets rather than npm bundling because:
1. Material UI is primarily designed for React applications
2. This approach is simpler for server-side rendered applications like .NET MVC
3. It reduces build complexity while still providing Material UI aesthetics

## Dependencies

- .NET Core SDK 9.0+
- Material UI CSS (via CDN)
- React and ReactDOM (via CDN) - for full Material UI component support