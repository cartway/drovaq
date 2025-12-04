"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
var ssr_1 = require("@supabase/ssr");
var client;
var createClient = function () {
    if (client) {
        return client;
    }
    client = (0, ssr_1.createBrowserClient)(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    return client;
};
exports.createClient = createClient;
// export const useSupabaseBrowser = () => {
//   return useMemo(createClient, []);
// };
