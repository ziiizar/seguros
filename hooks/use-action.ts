import { useState, useCallback } from "react";

import { ActionState, FieldErrors } from "@/types";

type Action<TInput, TOutput> = (
  data: TInput
) => Promise<ActionState<TInput, TOutput>>;

interface UseActionOptions<TOutput> {
  onSuccess?: (data: TOutput, message?: string) => void;
  onError?: (error: string) => void;
  onComplete?: () => void;
}

export const useAction = <TInput, TOutput>(
  action: Action<TInput, TOutput>,
  options?: UseActionOptions<TOutput>
) => {
  const [fieldErrors, setFieldErrors] = useState<FieldErrors<TInput>>();
  const [data, setData] = useState<TOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const execute = useCallback(
    async (input: TInput) => {
      setIsLoading(true);

      try {
        const result = await action(input);
        if (!result) {
          return;
        }

        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors);
        }

        if (result.message) {
          setMessage(result.message);
        }

        if (result.error) {
          setError(result.error);
          options?.onError?.(result.error);
        }

        if (result.data) {
          setData(result.data);
          options?.onSuccess?.(result.data, result.message);
        }
      } finally {
        setIsLoading(false);
        options?.onComplete?.();
      }
    },
    [action, options]
  );

  return {
    execute,
    fieldErrors,
    error,
    data,
    isLoading,
    message,
  };
};
