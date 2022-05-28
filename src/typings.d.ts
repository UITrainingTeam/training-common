// A fix for the Karma error: "Consider using '--resolveJsonModule' to import module with '.json' extension"
declare module '*.json' {
    const value: any;
    export default value;
  }

