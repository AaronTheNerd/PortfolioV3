import { Component, Input } from "@angular/core";
import { IProject } from "src/app/interfaces/project";
import { IProjectComponent } from "../../project.component";

@Component({
  selector: "app-project1",
  templateUrl: "./project1.component.html",
  styleUrls: ["./project1.component.css"],
})
export class Project1Component implements IProjectComponent {
  @Input() project?: IProject = undefined;

  configs = `{
  "token": "BOT SECRET TOKEN",
  "app_id": 0,
  "dev_id": 0,
  "guild_id": 0,
  "command_prefix": "!",
  "case_insensitive": true,
  "spotify": {
    "client_id": "SPOTIFY API CLIENT ID",
    "client_secret": "SPOTIFY API CLIENT SECRET"
  },
  "cogs": {
    "dnd": {
      "enabled": true,
      "binding": {
        "enabled": false,
        "channel_id": -1
      }
    },
    "events": {
      "enabled": true,
      "binding": {
        "enabled": false,
        "channel_id": -1
      },
      "role_on_join": {
        "enabled": true,
        "role_id": 0
      },
      "random_insult_on_command": {
        "enabled": true,
        "delete_after": 3,
        "insult_chance": 0.99,
        "adjective_chance": 0.5,
        "adjectives": [...],
        "insults": [...]
      }
    },
    "misc": {
      "enabled": true,
      "binding": {
        "enabled": false,
        "channel_id": -1
      }
    },
    "youtube": {
      "enabled": true,
      "binding": {
        "enabled": true,
        "channel_id": 0
      },
      "voteskip": {
        "exclude_idle": false,
        "requester_autoskip": false,
        "fraction": 0.51
      },
      "disconnect_timeout": 120,
      "lazy_load": 20,
      "max_lazy_load": 35,
      "delete_queue": 120
    },
    "admin": {
      "enabled": false,
      "binding": {
        "enabled": false
      }
    }
  }
}`;
}
