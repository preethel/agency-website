module.exports = {
  apps: [
    {
      name: "agency-website-dev",
      cwd: "/opt/agency-website",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: "3010",
        NEXT_TELEMETRY_DISABLED: "1",
      },
    },
  ],
};
