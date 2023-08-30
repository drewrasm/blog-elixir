defmodule BlogWeb.AuthController do
  use BlogWeb, :controller

  def google_callback(conn, _params) do
    IO.inspect(_params, label: "params")
    text conn, "The API works "
  end

end
