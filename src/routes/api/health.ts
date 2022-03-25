import type { RequestHandler } from "@sveltejs/kit/types/index";

export const get: RequestHandler = () => {
    return {
        status: 200,
        body: {
            ok: true,
        },
    };
};
