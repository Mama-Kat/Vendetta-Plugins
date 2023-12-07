import { logger } from "@vendetta";
import { registerCommand } from "@vendetta/commands";

const commands = [];

export const onLoad = () => {
  logger.info("Calculator loaded");

  commands.push(
    registerCommand({
      name: "calculate",
      displayName: "Calculate",
      description: "Perform a mathematical calculation",
      applicationId: "-1",
      inputType: 1,
      type: 1,
      options: [
        {
          name: "expression",
          displayName: "Mathematical Expression",
          description: "Enter a mathematical expression to calculate",
          type: 1,
          required: true,
        },
      ],
      execute: async (args, ctx) => {
        logger.info("Calculator command executed");

        const expression = args.expression;

        try {
          const result = eval(expression);
          ctx.reply(`Result: ${result}`);
        } catch (error) {
          ctx.reply("Error evaluating the expression.");
        }
      },
    })
  );
};

export const onUnload = () => {
  logger.info("Calculator unloaded");
  for (const unregisterCommand of commands) unregisterCommand();
};
