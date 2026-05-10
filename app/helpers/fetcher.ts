export async function request<JSON>(...args: Parameters<typeof fetch>): Promise<JSON> {
  const response = await fetch(...args);

  if (!response.ok) {
    const json = await response.json();

    let error: FetchError;
    if (json?.error) {
      error = new Error(json.error);
      error.status = response.status;
    } else {
      error = new Error("NetworkError when attempting to fetch resource.");
    }

    // doubly make sure error is not undefined
    return Promise.reject(error || new Error("An unexpected error has occurred."));
  }

  const type = response.headers.get("content-type");
  if (!type?.includes("application/json")) {
    return Promise.reject(new TypeError(`Malformed data! Expected 'JSON', got '${type}'`));
  }

  return response.json();
}

interface FetchError extends Error {
  status?: number;
}
